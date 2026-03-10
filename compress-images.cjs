const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// ── CONFIGURATION ──────────────────────────────────────────────────
const CONFIG = {
    /** Dossier racine à scanner */
    inputDir: path.join(__dirname, "public"),

    /** Extensions traitées (insensible à la casse) */
    extensions: [".jpg", ".jpeg", ".png", ".webp"],

    /** Qualité JPEG (0-100) — 80 = bon compromis qualité/poids */
    jpegQuality: 80,

    /** Qualité PNG (0-100) — compression résistante avec pngquant */
    pngQuality: 80,

    /** Largeur max en pixels (les images plus petites ne sont pas agrandies) */
    maxWidth: 1920,

    /** Hauteur max en pixels */
    maxHeight: 1920,
};
// ───────────────────────────────────────────────────────────────────

/**
 * Parcours récursif d'un dossier et retourne tous les fichiers images.
 * @param {string} dir
 * @returns {string[]}
 */
function getAllImageFiles(dir) {
    const results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...getAllImageFiles(fullPath));
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (CONFIG.extensions.includes(ext)) {
                results.push(fullPath);
            }
        }
    }

    return results;
}

/**
 * Formate une taille en octets en une chaîne lisible (Ko ou Mo).
 * @param {number} bytes
 * @returns {string}
 */
function formatSize(bytes) {
    if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(2)} Mo`;
    return `${(bytes / 1_000).toFixed(1)} Ko`;
}

/**
 * Compresse une image et remplace le fichier original.
 * @param {string} filePath
 * @returns {Promise<{saved: number, skipped: boolean}>}
 */
async function compressImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const originalSize = fs.statSync(filePath).size;
    const tmpPath = filePath + ".tmp";

    try {
        const sharpInstance = sharp(filePath).resize({
            width: CONFIG.maxWidth,
            height: CONFIG.maxHeight,
            fit: "inside",          // Respecte les proportions, ne recadre pas
            withoutEnlargement: true, // Ne pas agrandir les petites images
        });

        if (ext === ".png") {
            await sharpInstance
                .png({
                    quality: CONFIG.pngQuality,
                    compressionLevel: 9, // Compression maximale (lossless)
                })
                .toFile(tmpPath);
        } else {
            // .jpg / .jpeg / .webp
            await sharpInstance
                .jpeg({
                    quality: CONFIG.jpegQuality,
                    mozjpeg: true,        // Encodeur MozJPEG (meilleure compression)
                    progressive: true,    // JPEG progressif (chargement plus rapide)
                })
                .toFile(tmpPath);
        }

        const newSize = fs.statSync(tmpPath).size;

        // Si le fichier compressé est plus grand, on garde l'original
        if (newSize >= originalSize) {
            fs.unlinkSync(tmpPath);
            return { saved: 0, skipped: true };
        }

        // Remplace l'original par la version compressée
        fs.unlinkSync(filePath);
        fs.renameSync(tmpPath, filePath);

        return { saved: originalSize - newSize, skipped: false };
    } catch (err) {
        // Nettoyage en cas d'erreur
        if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
        throw err;
    }
}

/**
 * Point d'entrée principal.
 */
async function main() {
    console.log("\n╔══════════════════════════════════════════════════╗");
    console.log("║   🖼️  Compression d'images — Le Cauris           ║");
    console.log("╚══════════════════════════════════════════════════╝\n");

    const images = getAllImageFiles(CONFIG.inputDir);

    if (images.length === 0) {
        console.log("❌ Aucune image trouvée dans", CONFIG.inputDir);
        return;
    }

    console.log(`📂 Dossier : ${CONFIG.inputDir}`);
    console.log(`🔍 ${images.length} image(s) trouvée(s)\n`);
    console.log("─".repeat(70));

    let totalSaved = 0;
    let compressedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (const filePath of images) {
        const relativePath = path.relative(CONFIG.inputDir, filePath);
        const originalSize = fs.statSync(filePath).size;

        try {
            const { saved, skipped } = await compressImage(filePath);

            if (skipped) {
                console.log(`⏭  ${relativePath}`);
                console.log(
                    `    → Déjà optimisée (${formatSize(originalSize)}) — ignorée\n`
                );
                skippedCount++;
            } else {
                const newSize = originalSize - saved;
                const percent = ((saved / originalSize) * 100).toFixed(1);
                totalSaved += saved;
                compressedCount++;

                console.log(`✅ ${relativePath}`);
                console.log(
                    `    ${formatSize(originalSize)} → ${formatSize(newSize)}` +
                    `  (−${formatSize(saved)} / −${percent}%)\n`
                );
            }
        } catch (err) {
            errorCount++;
            console.log(`❌ ERREUR : ${relativePath}`);
            console.log(`    ${err.message}\n`);
        }
    }

    console.log("─".repeat(70));
    console.log("\n📊 RÉSUMÉ");
    console.log(`   ✅ Compressées  : ${compressedCount} image(s)`);
    console.log(`   ⏭  Ignorées     : ${skippedCount} image(s) (déjà optimisées)`);
    console.log(`   ❌ Erreurs      : ${errorCount} image(s)`);
    console.log(`   💾 Espace libéré : ${formatSize(totalSaved)}`);
    console.log("\n✨ Compression terminée !\n");
}

main();

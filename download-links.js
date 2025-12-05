// Script per Instagram: raccoglie tutti i link dei post e reel presenti nella pagina
// e li salva in un file .txt. Il nome del file contiene il nome della collection
// per riconoscerla facilmente. Il file mantiene l'ordine originale dei link.
(() => {
    // 1. Recupero nome della collection dal titolo della pagina
    let collectionName = document.title.split('•')[0].trim();

    // 2. Pulizia del nome per evitare problemi con file system
    collectionName = collectionName.replace(/[\\/:*?"<>|]/g, '_');

    // 3. Raccolta link
    const links = [];
    document.querySelectorAll('a[href]').forEach(a => {
        const h = a.getAttribute('href');
        if (h.startsWith('/p/') || h.startsWith('/reel/')) {
            links.push('https://www.instagram.com' + h);
        }
    });

    // 4. Creazione file
    const blob = new Blob([links.join('\n') + '\n'], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `instagram_links_${collectionName}.txt`;
    a.click();
})();

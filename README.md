# ig-collection-reels-downloader

## Project goal
The aim of the project is to download saved Instagram reels to a private collection.

## Requirements

[Instaloader](https://github.com/instaloader/instaloader) and Python ≥ 3.6

## How it works

1. Go to one of your Instagram collections in the browser and scroll down until all reels are fully loaded.
2. Run the JS code in the browser console to generate a .txt file containing all the links from the loaded collection. The file will be named `instagram_links_<collection-name>.txt`
3. Run the chosen Python script to download all the reels listed in the `.txt` file.
   Example: `python3 <python-script>.py <pathTo/>links.txt <destinationPath/>`

## Scripts

### `download_links.js`
- Collects all post and reel links from the current Instagram collection page.
- Saves the links into a `.txt` file, preserving the order of appearance.
- The filename includes the collection name for easy identification.

### `downloadAll-getPath.py`
- Accepts two arguments: the path to the link file and the destination download folder.
- Creates the folder if it does not exist and uses `--dirname-pattern` to tell Instaloader where to save the files.
- Downloads all the contents associated with each reel (photos, JSON files, etc.).

### `downloadMp4-getPath.py`
- Extends the previous script by adding options that disable everything except video:
`--no-pictures`, `--no-captions`, `--no-metadata-json`, `--no-compress-json`
- Result: downloads only the .mp4 file of each reel into the specified folder.

## License
This project is licensed under the [MIT License](LICENSE).

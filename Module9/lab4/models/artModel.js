class ArtObject {
  constructor(objectID, title, artist, date, medium, image) {
    this.objectID = objectID;
    this.title = title;
    this.artist = artist;
    this.date = date;
    this.medium = medium;
    this.image = image;
  }
}

module.exports = ArtObject;

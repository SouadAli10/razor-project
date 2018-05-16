import { Mongo } from 'meteor/mongo';
import { FilesCollection } from 'meteor/ostrio:files'
import { Meteor } from 'meteor/meteor';

export const Portfolios = new Mongo.Collection('portfolios');
export const Images = new FilesCollection({
    storagePath: '../../../../../public/portfolioIMG',
    collectionName: 'Images',
    allowClientCode: false, // Disallow remove files from Client
    onBeforeUpload(file) {
      // Allow upload files under 10MB, and only in png/jpg/jpeg formats
      if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
        return true;
      }
      return 'Please upload image, with size equal or less than 10MB';
    }
  });
  

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('portfolios', () => {
        return Portfolios.find({});
    });
    Meteor.publish('files.images.all', function () {
        return Images.find().cursor;
    });
}

if (Meteor.isClient) {
    Meteor.subscribe('files.images.all');
}


Meteor.methods({
    'portfolios.edit'(portfolioId, descriptionNow, URLNow) {
        // check that data is correct
        const portfolio_item = Portfolios.findOne(portfolioId)
        Portfolios.update(portfolioId, { ...portfolio_item,description: descriptionNow, URL:URLNow })
    },
    'portfolios.add'(description, photo, URL) {
        const new_portfolio_item = { description, photo, URL}
        Portfolios.insert(new_portfolio_item)
    },

    'portfolios.remove'(portfolio_id) {
        Portfolios.remove(portfolio_id)
    }
})


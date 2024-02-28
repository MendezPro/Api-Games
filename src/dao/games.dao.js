import Game  from '../models/games.model.js';

const gameDAO = {};

gameDAO.getAll = async () => {

    const Games = await Game.find();
    return Games;

}

gameDAO.getOne = async (barcode) => {
    const game = await Game.findOne({barcode: barcode});
    return game;
}

gameDAO.insertOne = async (product) => {
    return await Game.create(product);
}

gameDAO.updateOne = async (barcode, game) => {
    return await Game.findOneAndUpdate({barcode: barcode}, game)
}

gameDAO.deleteOne = async (barcode) => {
    return await Game.findOneAndDelete({barcode: barcode})
}

export default gameDAO;

import LinkModel from '../models/link.js'

const LinksController = {

    getList: async (req, res) => {
        try {
            const links = await LinkModel.find();
            res.json({ links });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    getById: async (req, res) => {
        const id = req.params.id;
        try {
            const link = await LinkModel.findById(id);//עדכון לפי מזהה
            const targetParamValue = req.query.hasOwnProperty(link.targetParamName) ? req.query[link.targetParamName] : "????"
            link.clicks.push({ ipAddress: req.ip, targetParamValue: targetParamValue })
            await link.save()
            res.redirect( link.originalUrl, 301);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    add: async (req, res) => {
        try {
            const newLink = await LinkModel.create(req.body);//הוספת חדש
            res.json(newLink);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        try {
            const updatedLink = await LinkModel.findByIdAndUpdate(id, req.body, {
                new: true,
            });//עדכון לפי מזהה
            res.json(updatedLink);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await LinkModel.findByIdAndDelete(id);//מחיקה לפי מזהה
            res.json(deleted);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

};

export default LinksController;
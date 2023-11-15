module.exports = {
    mutipleMongooseTObject: function (datas) {
        return datas.map((data) => {
            data.toObject();
        });
    },
    mongooseToObject: function (data) {
        return data ? data.toObject() : data;
    },
};

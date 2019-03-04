var Category = app.resource = restful.model('category', mongoose.Schema({
        cat_name: String,
    }))
    .methods(['get', 'post', 'put', 'delete']);

Category.register(app, '/category');
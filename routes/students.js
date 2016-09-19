var students = [
    {"id": 0, "firstName": "Same", "lastName": "John"},
    {"id": 1, "firstName": "Julie", "lastName": "Tan"}
];

exports.findAll = function (req, res, next) {
    var name = req.query.name;

    if (name) {
        console.log('[findAll: name]=' + name);
        
        var results = students.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(name.toLowerCase()) > -1;
        });

        res.send(results);

    } else {
        res.send(students);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;

    console.log('[findById: id]=' + id);
    
    res.send(students[id]);
};
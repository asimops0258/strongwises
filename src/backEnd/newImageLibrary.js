const Fs = require('./fs.js');

function split(string, char, index) {
    const strings = string.split(char);
    if (index >= 0) {
        return string.split(char)[index]
    } else {
        return string.split(char)[strings.length + index]
    }
}

function listFolder(bucket, path) {
    return new Promise((resolve, reject) => {
        const tree = [];
        const promise = [];
        const promiseTreeIndex = [];
        Fs.list(bucket, path).then(async list => {
            for (let i = 0; i < list.length; i++) {
                if (list[i].name != undefined) {
                    tree.push({
                        name: split(list[i].name, '/', -1),
                        path: list[i].name,
                        type: "file",
                        url: bucket + list[i].name
                    })
                } else {
                    tree.push({
                        name: split(list[i].prefix, '/', -2),
                        path: list[i].prefix,
                        type: "folder",
                        subFolder: null
                    })
                    promise.push(listFolder(bucket, '/' + list[i].prefix))
                    promiseTreeIndex.push({
                        object: "subFolder",
                        treeIndex: tree.length - 1,
                        promiseIndex: promise.length - 1
                    })
                }
            }
            Promise.all(promise).then(results => {
                for (let i = 0; i < promiseTreeIndex.length; i++) {
                    tree[promiseTreeIndex[i].treeIndex][promiseTreeIndex[i].object] = results[promiseTreeIndex[i].promiseIndex]
                }
                resolve(tree)
            }).catch(error => reject(error));
        }).catch(error => reject(error));
    })
}

module.exports = (app) => {
    app.get('/actualcase/imagelibrary', (req, res) => {
        listFolder(Fs.staticDir.actualCase, '').then(list => {
            let result = {};
            for (let i = 0; i < list.length; i++) {
                result[list[i].name] = [];
                const subFolder = list[i].subFolder;
                for (let j = 0; j < subFolder.length; j++) {
                    if (subFolder[j].type === 'file') {
                        const name = split(subFolder[j].name, '.', 0);
                        const sub = subFolder.find(e => e.name === name && e.type === "folder");
                        result[list[i].name].push({
                            name,
                            image: subFolder[j],
                            subFolder: sub ? sub.subFolder : null
                        })
                    }
                }
            }
            res.json(result)
        }).catch(error => { res.status(500).json({ "error": error }) });
    })
    app.get('/report/imagelibrary', (req, res) => {
        listFolder(Fs.staticDir.report, '').then(list => {
            let result = {};
            for (let i = 0; i < list.length; i++) {
                result[list[i].name] = [];
                const subFolder = list[i].subFolder;
                for (let j = 0; j < subFolder.length; j++) {
                    if (subFolder[j].type === 'file') {
                        const name = split(subFolder[j].name, '.', 0);
                        const sub = subFolder.find(e => e.name === name && e.type === "folder");
                        result[list[i].name].push({
                            name,
                            image: subFolder[j],
                            subFolder: sub ? sub.subFolder : null
                        })
                    }
                }
            }
            res.json(result)
        }).catch(error => { res.status(500).json({ "error": error }) });
    })
}
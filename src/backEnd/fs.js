const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const fs = require('fs/promises');
const path = require('path');

const baseDir = '/web';
const staticDir = {
    actualCase: baseDir + '/actualCase',
    report: baseDir + '/report'
};

const isDirExisting = (dir) => {
    return fs.access(dir).then(() => {
        return Promise.resolve(true);
    }).catch(error => {
        if (error.code === 'ENOENT') {
            return Promise.resolve(false);
        } else {
            console.log(error);
            return Promise.reject("CHECK_ACCESS_FAILED");
        }
    })
};

const check = async () => {
    for (let dir in staticDir) {
        let _dirs = (process.cwd() + staticDir[dir]).split('/');
        for (let i = 1; i < _dirs.length; i++) {
            let _dir = '';
            for (let j = 1; j <= i; j++)
                _dir = _dir + '/' + _dirs[j];
            try {
                let exists = await isDirExisting(_dir);
                if (!exists)
                    await fs.mkdir(_dir)
            } catch (err) {
                console.log(err);
            }
        }
    }
}
check()

module.exports = {
    baseDir,
    staticDir,
    list(bucket, dir) {
        ndir = process.cwd() + bucket
        return fs.readdir(ndir + dir).then(list => {
            let res = [];
            for (let i = 0; i < list.length; i++)
                if (path.extname(list[i]) === '') {
                    res.push({
                        prefix: `${dir}${list[i]}/`
                    })
                } else {
                    res.push({
                        name: `${dir}${list[i]}`
                    })
                }
            return Promise.resolve(res);
        }).catch(error => {
            console.log(error);
            return Promise.reject('LIST_FAILED');
        })
    }
}
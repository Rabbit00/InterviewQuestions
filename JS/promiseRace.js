Promise.race = arr => {
    return new Promise((resolve, reject) => {
        arr.forEach(element => {
            Promise.resolve(element).then(
                val => resolve(val),
                err => reject(err)
            )
        });
    })
}
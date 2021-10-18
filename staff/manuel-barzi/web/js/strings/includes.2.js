function includes(string, search, position) {
    var i = 0, j = 0

    if (position)
        i = position

    for (; i < string.length; i++) {
        var char = string[i]
        var target = search[j]

        if (char === target) {
            j++

            if (j === search.length) {
                return true
            }
        } else {
            j = 0
        }
    }

    return false
}
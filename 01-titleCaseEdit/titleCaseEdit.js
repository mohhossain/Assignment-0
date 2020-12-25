function titleCaseEdit(title) {
    let str = title.split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    let final = str.join(" ");
    return final;
  // Insert code here;
}

// Do not edit this line;
module.exports = titleCaseEdit;
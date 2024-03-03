var rojesh = {
    email: 'rs@gmail.com',
    userId: 1,
    DBId: 25675,
    startTrial: function () { return 'rojesh'; },
    getCoupon: function (name) {
        return name.length + 10;
    }
};
// rojesh.DBId = 012    throws error
console.log(rojesh);
console.log(rojesh.getCoupon('rojesh'));

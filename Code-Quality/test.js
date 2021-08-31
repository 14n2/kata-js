describe("Matchstick houses", () => {
    it("should return 0 when the input is 0", () => {
        assert.equal(matchHouses(0), 0);
    });

    it("should return 6 when the input is 1", () => {
        assert.equal(matchHouses(1), 6);
    })

    it("should return 11 when the input is 2", () => {
        assert.equal(matchHouses(2), 11);
    })

    it("should return 21 when the input is 4", () => {
        assert.equal(matchHouses(4), 21);
    })

    it("should return 436 when the input is 87", () => {
        assert.equal(matchHouses(87), 436);
    })
});

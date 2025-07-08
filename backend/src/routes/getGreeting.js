const GREETINGS = [
    "Octávio, Welcome!",
    "There's a lot Todo Today :) !",
    "Keep the focus on the important this!",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};

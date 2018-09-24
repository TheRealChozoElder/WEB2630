new Vue({
    el: "#app",
    data:
            function () {
                return {userChoice: null,
                    compChoice: null,
                    userCredit: 100,
                    round: 0
                };
            },
    methods: {
//This is used to find the computer choice then takes it and runs compare
        choose: function (pick) {
            this.userChoice = pick;
            picks = ['rock', 'paper', 'scissors'];
            this.compChoice = picks[Math.random() * picks.length];
            this.scoreCreds();
        },
        scoreCreds: function () {
            if (this.userChoice === 'rock') {
                if (this.compChoice === 'paper') {
                    document.getElementById("result").innerHTML = 'Computer wins';
                    this.userCredit--;
                    this.round++;
                } else if (this.compChoice === 'scissors') {
                    document.getElementById("result").innerHTML = 'User wins';
                    this.userCredit++;
                    this.round++;
                } else {
                    document.getElementById("result").innerHTML = 'Draw';
                    this.round++;
                }
            } else if (this.userChoice === 'paper') {
                if (this.compChoice === 'rock') {
                    document.getElementById("result").innerHTML = 'User wins';
                    this.userCredit++;
                    this.round++;
                } else if (this.compChoice === 'scissors') {
                    document.getElementById("result").innerHTML = 'Computer wins';
                    this.userCredit--;
                    this.round++;
                } else {
                    document.getElementById("result").innerHTML = 'Draw';
                    this.round++;
                }
            } else {
                if (this.compChoice === 'rock') {
                    document.getElementById("result").innerHTML = 'Computer wins';
                    this.userCredit--;
                    this.round++;
                } else if (this.compChoice === 'paper') {
                    document.getElementById("result").innerHTML = 'User wins';
                    this.userCredit++;
                    this.round++;
                } else {
                    document.getElementById("result").innerHTML = 'Draw';
                    this.round++;
                }
            }
        }
    },
    computed: {
        computedUser: function () {
            return {
                "rock": this.userChoice === "rock",
                "paper": this.userChoice === "paper",
                "scissors": this.userChoice === "scissors"
            };
        },
        computedRand: function () {
            return {
                "rock": this.compChoice === "rock",
                "paper": this.compChoice === "paper",
                "scissors": this.compChoice === "scissors"
            };
        }
    }
})
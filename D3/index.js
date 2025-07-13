Vue.createApp({
  data(){
    return{
      gameData: {
        board: Array(9).fill(null),
        turn: 'X',
        winner: null
      }
    }
  },
  methods: {
    async fetchGameData() {
      this.gameData = await fetch('back.php').then(z => z.json());
    },
    async handleCellClick(index) {
      if (this.gameData.board[index] || this.gameData.winner) return;

      this.gameData.board[index] = 'O';
      await this.updateGameData();
      if (await this.checkWinner()) return;

      let num = 0;
      while (num !== 9){
        if (this.gameData.board[num] === null){
          this.gameData.board[num] = "X";
          break;
        }
        num++;
      }
    },
    async updateGameData() {
      this.gameData = await fetch('back.php',{
        method:"POST",
        headers : {'content-type':'application/json'},
        body : JSON.stringify({ action: 'updateData', data: JSON.stringify(this.gameData) })
      }).then(z => z.json())
    },
    async checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];

      for (let [a, b, c] of winningCombinations) {
        if (this.gameData.board[a] && this.gameData.board[a] === this.gameData.board[b] && this.gameData.board[a] === this.gameData.board[c]) {
          this.gameData.winner = this.gameData.board[a] + "方勝利";
          await this.updateGameData();
          return true;
        }
      }

      if (this.gameData.board.every(z => z !== null)){
        this.gameData.winner = "平手"
        await this.updateGameData();
        return true;
      }

      return false;
    },
    async resetGame() {
      this.gameData = { board: Array(9).fill(null), turn: 'X', winner: null };
      await this.updateGameData();
    }
  },
  async mounted() {
    await this.fetchGameData();
  }
}).mount('#index');

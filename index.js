function superbowlWin(record) {
    let result = record.find(record => record.result === "W")
    if (result) {
      return result.year
    }
   }
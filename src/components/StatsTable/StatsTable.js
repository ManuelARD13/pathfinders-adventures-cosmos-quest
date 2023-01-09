<table className="statsTable">
                    <tbody>    
                        <tr>
                            <th>Stats</th>
                            <th>Score</th>
                            <th>Modif.</th>
                        </tr>
                        <tr>
                            <td> CON</td>
                            <td><span id="CONScore" className="statsScores">0</span></td>
                            <td><span id="CONModif">+0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="CON" onClick={reRollStatDice} /></td> : null}
                        </tr>
                        <tr>
                            <td>STR</td>
                            <td><span id="STRScore" className="statsScores">0</span></td>
                            <td><span id="STRModif">+0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="STR" onClick={reRollStatDice} /></td> : null }
                        </tr>
                        <tr>
                            <td>DEX</td>
                            <td><span id="DEXScore" className="statsScores">0</span></td>
                            <td><span id="DEXModif">+0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="DEX" onClick={reRollStatDice} /></td> : null }
                        </tr>
                        <tr>
                            <td>INT</td>
                            <td><span id="INTScore" className="statsScores"> 0</span></td>
                            <td><span id="INTModif">+0</span></td>
                            {diceRolled ?  <td><input type="button" value="Re-Roll!" className="reRollButtons" id="INT" onClick={reRollStatDice} /></td> : null }
                        </tr>
                        <tr>
                            <td>WIS</td>
                            <td><span id="WISScore" className="statsScores">0</span></td>
                            <td><span id="WISModif">+0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="WIS" onClick={reRollStatDice} /></td> : null }
                        </tr>
                        <tr>
                            <td>CHA</td>
                            <td><span id="CHAScore" className="statsScores">0</span></td>
                            <td><span id="CHAModif">+0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="CHA" onClick={reRollStatDice} /></td> : null }
                        </tr>
                    </tbody>
                </table>
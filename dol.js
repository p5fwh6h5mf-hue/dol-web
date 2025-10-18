document.getElementById("startGame").addEventListener("click", async () => {
    // Pyodide 로드
    const pyodide = await loadPyodide();

    // 최소 테스트용 Python 코드
    const pythonCode = `
import js

canvas = js.document.getElementById("gameCanvas")
ctx = canvas.getContext("2d")

ctx.fillStyle = "lightblue"
ctx.fillRect(0, 0, 800, 600)
ctx.fillStyle = "black"
ctx.font = "30px Arial"
ctx.fillText("DOL 게임 시작!", 150, 300)
    `;

    await pyodide.runPythonAsync(pythonCode);
});

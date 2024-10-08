const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W' || visited[r][c]) {
            return;
        }
        visited[r][c] = true;
        dfs(r + 1, c); 
        dfs(r - 1, c); 
        dfs(r, c + 1); 
        dfs(r, c - 1); 
    }

    let islandCount = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'L' && !visited[i][j]) {
                islandCount++;
                dfs(i, j);
            }
        }
    }

    return islandCount;
};

module.exports = getTotalIsles;

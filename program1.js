const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    function dfs(r, c) {
        // Check boundaries and whether the cell is water or already visited
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W' || visited[r][c]) {
            return;
        }
        // Mark the cell as visited
        visited[r][c] = true;
        // Visit all 4 adjacent cells (up, down, left, right)
        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    }

    let islandCount = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'L' && !visited[i][j]) {
                // Found a new island
                islandCount++;
                dfs(i, j); // Start DFS to mark all parts of this island
            }
        }
    }

    return islandCount;
};

module.exports = getTotalIsles;

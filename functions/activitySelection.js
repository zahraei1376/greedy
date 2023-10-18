const activitySelection = (lists) => {
    lists.sort((a, b) => a.end - b.end);
    const result = [];
    result.push(lists[0]);
    for (let i = 1; i < lists.length; i++) {
        if (lists[i].start >= result[result.length - 1].end) {
            result.push(lists[i])
        }
    }
    return result;
}
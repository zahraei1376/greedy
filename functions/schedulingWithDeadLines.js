const schedulingWithDeadLines = (list) => {
    list.sort((a, b) => b.profit - a.profit);
    let maxDeadline = 0;
    for (const job of list) {
        if (job.deadline > maxDeadline) {
            maxDeadline = job.deadline;
        }
    }

    const schedule = new Array(maxDeadline).fill(null);

    for (const job of list) {
        for (let i = job.deadline - 1; i >= 0; i--) {
            if (!schedule[i]) {
                schedule[i] = job;
                break;
            }
        }
    }

    const scheduledJobs = schedule.filter(job => job !== null);

    return scheduledJobs;
}
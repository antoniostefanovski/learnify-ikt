import { BaseEntity } from "./BaseEntity";

export class Leaderboard extends BaseEntity {
    constructor(id, points, rank, studentId, student = null) {
        super(id);
        this.points = points;
        this.rank = rank;
        this.studentId = studentId;
        this.student = student;
    }
}
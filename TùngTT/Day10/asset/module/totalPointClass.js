import { moduleFn } from "./index.js";
/**
 * Tính tổng điểm của học viên trong 7 ngày
 * @param {*} list | danh sách điểm học viên trong 7 ngày
 * @returns | danh sách học viên và tổng điểm trong 7 ngày
 */
export const totalPointClass = (list) => {
    let rs = [...list];
    rs.map((e) => {
        const totalPoint = {};
        let total = moduleFn.days.map((o) => {
            let sum = 0;
            sum += e.points[o.dayId-1].point;
            return sum
        }).reduce((pre,cur) => pre+cur)
        if (!("totalPoint" in e)) {
            e.totalPoint = total;
        }
        e.totalPoint;
        })
        return rs
}

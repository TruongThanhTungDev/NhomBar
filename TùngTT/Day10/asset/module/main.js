import data from "./data.json" assert { type: "json" };
import { moduleFn} from "./index.js";
const listPoint = moduleFn.totalPointClass(moduleFn.generatorPointClass(data));
console.log(listPoint)
// var list = moduleFn.generatorPointClass(data)
// console.log(list)

// function addPoint(a) {
//     let rs = [...a];
//     rs.map((s) => {
//         const totalPoint = {};
//         // nếu chưa cố key points thì tạo mói
//         if (!("totalPoint" in s)) {
//             s.totalPoint = 0;
//         }
//         // thêm diểm vào mảng points trong obj học viên
//             s.totalPoint;
//         });
//     return rs;
// } 
// console.log(addPoint(list))
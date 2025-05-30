
export const Shared_CheckStringType = (value: any) => {
    return Object.prototype.toString.call(value) === "[object String]";
}
const spinalCase = string => {
    let result = string.replace(/([A-Z])/g, "-$1").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g,"").toLowerCase();
    return result;
}
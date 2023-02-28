

export const testObject = {
    name: '宇智波班',
    age: 100,
    skill: ['豪火球之术', '须佐之男']
}

export const skills: string[] = ['水遁','火遁','雷遁','木遁']

export const getAssetImage = function (url: string) {
    return new URL(`../assets/${url}`, import.meta.url).href
}

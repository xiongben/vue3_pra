


export class User {
    public name: string
    public tel: number

    constructor(name: string, tel: number) {
        this.name = name
        this.tel = tel
    }

    test() {
        console.log("fff")
    }
}

export interface PropsTest {
    msg?: string
    labels?: string[]
}

// export default User

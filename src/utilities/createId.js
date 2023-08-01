import {v4 as uuid} from 'uuid';

const createId = (pre = "") => {
    return pre + uuid()

}

export default createId
import { User } from './users.model'

export const getLastUserId = async () => {
    const lastUser = await User.findOne({}, { id: 1, _id: -1 })
        .sort({
            createdAt: -1,
        })
        .lean()

    return lastUser?.id
}

export const generateUserId = async () => {
    const currentID = (await getLastUserId()) || (0).toString().padStart(5, '0')

    const newID = (parseInt(currentID) + 1).toString().padStart(5, '0')

    return newID
}

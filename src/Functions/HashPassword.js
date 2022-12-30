import sjcl from 'sjcl'

export default function hashPassword(pass, username) {
    const myString = pass
    const myBitArray = sjcl.hash.sha256.hash(myString)
    const myHash = sjcl.codec.hex.fromBits(myBitArray)
    return myHash
}

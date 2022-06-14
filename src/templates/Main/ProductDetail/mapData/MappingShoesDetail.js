const MappingShoesDetail = (detail) => {
    const { image_bytes } = detail
    let params = []
    if (image_bytes?.length > 0) {
        for (let i = 0; i < image_bytes.length; i++) {
            let value = image_bytes[i]
            params.push({
                image_id: value.image_id,
                image_bytes: value.image_bytes,
                isActive: i == 0 ? true : false
            })
        }
    }
    return params
};
export default MappingShoesDetail;

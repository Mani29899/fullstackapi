
export default (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('ProductCategory', {
        id: {
            field: 'id',
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: false,
            autoIncrement: true
        },
        title: {
            field: 'title',
            type: DataTypes.TEXT('long'),
        },
        description: {
            field: 'description',
            type: DataTypes.TEXT('long')
        },
        isActive: {
            field: 'isActive',
            type: DataTypes.TINYINT
        }
    }, {
        tableName: 'productcategory',
        timestamps: false,
        underscored: true,
        
        classMethods: {

        }
    });

    return ProductCategory;
}
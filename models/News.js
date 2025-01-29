module.exports = (sequelize, DataTypes) => {
	return sequelize.define('News', {
	  title: {
		type: DataTypes.STRING,
		allowNull: false
	  },
	  content: {
		type: DataTypes.TEXT,
		allowNull: false
	  },
	  category: {
		type: DataTypes.ENUM('government', 'health', 'education', 'culture'),
		allowNull: false
	  },
	  publishDate: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	  }
	}, {
	  timestamps: true
	});
  };
const Sequelize = require("sequelize")

class Actor extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                actor_id: { 
                    type: Sequelize.SMALLINT,
                    primaryKey: true                    
                }, 
                first_name: Sequelize.STRING,
                last_name: Sequelize.STRING,
                last_update: Sequelize.DATE               
            },
            {
                sequelize,
                timestamps: false
            }
            
        )
    }
}

module.exports = Actor 
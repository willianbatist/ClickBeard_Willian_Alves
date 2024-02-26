  +------------------+     +------------------+     +------------------+
  |       User       |     |      Barber      |     | ScheduledApptmt  |
  +------------------+     +------------------+     +------------------+
  | id: String [PK]  |     | id: String [PK]  |     | id: String [PK]  |
  | name: String     |     | name: String     |     | date: DateTime   |
  | email: String    |     | age: Int         |     | user_id: String  |
  | password: String |     | dateHire: DateTime |   | barber_id: String|
  | role: String     |     | specialties: String[]| |                  |
  | created_at: DateTime | | created_at: DateTime | |                  |
  |                  |     | updated_at: DateTime | |                  |
  +------------------+     +------------------+     +------------------+
            |                      |                       |
            |                      |                       |
            |                      |                       |
            +----------------------+-----------------------+
            |                      |                       |
            |                   ScheduledApptmt           |
            |                      |                       |
            |                      |                       |
            +----------------------+-----------------------+

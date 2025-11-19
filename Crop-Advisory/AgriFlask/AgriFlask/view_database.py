
import sqlite3
import os

# Path to your database
db_path = os.path.join(os.path.dirname(__file__), 'farmer_advisory.db')

if not os.path.exists(db_path):
    print(f"❌ Database file not found at: {db_path}")
    print("The database will be created when you first register a user.")
else:
    print(f"✅ Database found at: {db_path}")
    print("\n" + "="*60)
    
    # Connect to the database
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Check if users table exists
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='users'")
    if not cursor.fetchone():
        print("❌ Users table doesn't exist yet.")
        print("Register a user first to create the table.")
    else:
        # Get all users
        cursor.execute("SELECT id, username, created_at FROM users")
        users = cursor.fetchall()
        
        if users:
            print(f"📊 Found {len(users)} user(s) in the database:\n")
            print(f"{'ID':<5} {'Username':<20} {'Created At':<30}")
            print("-" * 60)
            for user in users:
                print(f"{user[0]:<5} {user[1]:<20} {user[2]:<30}")
        else:
            print("📭 No users found in the database.")
            print("Try registering a user through the web interface.")
    
    print("\n" + "="*60)
    
    # Check forum posts
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='forum_posts'")
    if cursor.fetchone():
        cursor.execute("SELECT COUNT(*) FROM forum_posts")
        post_count = cursor.fetchone()[0]
        print(f"📝 Forum posts: {post_count}")
    
    # Check forum answers
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='forum_answers'")
    if cursor.fetchone():
        cursor.execute("SELECT COUNT(*) FROM forum_answers")
        answer_count = cursor.fetchone()[0]
        print(f"💬 Forum answers: {answer_count}")
    
    conn.close()

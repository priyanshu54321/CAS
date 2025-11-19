
from sqlalchemy import create_engine, Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from datetime import datetime
import os

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    username = Column(String(80), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    posts = relationship('ForumPost', back_populates='author_user')
    answers = relationship('ForumAnswer', back_populates='author_user')

class ForumPost(Base):
    __tablename__ = 'forum_posts'
    
    id = Column(Integer, primary_key=True)
    author = Column(String(80), ForeignKey('users.username'), nullable=False)
    title = Column(String(200))
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    author_user = relationship('User', back_populates='posts')
    answers = relationship('ForumAnswer', back_populates='post', cascade='all, delete-orphan')

class ForumAnswer(Base):
    __tablename__ = 'forum_answers'
    
    id = Column(Integer, primary_key=True)
    post_id = Column(Integer, ForeignKey('forum_posts.id'), nullable=False)
    author = Column(String(80), ForeignKey('users.username'), nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    post = relationship('ForumPost', back_populates='answers')
    author_user = relationship('User', back_populates='answers')

def init_db():
    # Use SQLite database stored in a file
    database_path = os.path.join(os.path.dirname(__file__), 'farmer_advisory.db')
    database_url = f'sqlite:///{database_path}'
    
    engine = create_engine(database_url, connect_args={'check_same_thread': False})
    Base.metadata.create_all(engine)
    return engine

def get_session():
    # Use SQLite database stored in a file
    database_path = os.path.join(os.path.dirname(__file__), 'farmer_advisory.db')
    database_url = f'sqlite:///{database_path}'
    
    engine = create_engine(database_url, connect_args={'check_same_thread': False})
    Session = sessionmaker(bind=engine)
    return Session()

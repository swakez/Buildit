"""add_blacklist_table

Revision ID: 39386b0c9402
Revises: 055d0fb5016a
Create Date: 2022-03-13 13:47:39.592399

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '39386b0c9402'
down_revision = '055d0fb5016a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('blacklist_tokens',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('token', sa.String(length=500), nullable=False),
    sa.Column('blacklisted_on', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('token')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('blacklist_tokens')
    # ### end Alembic commands ###
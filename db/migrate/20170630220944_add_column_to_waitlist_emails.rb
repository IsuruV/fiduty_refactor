class AddColumnToWaitlistEmails < ActiveRecord::Migration[5.0]
  def change
    add_column :waitlist_emails, :email, :string
  end
end

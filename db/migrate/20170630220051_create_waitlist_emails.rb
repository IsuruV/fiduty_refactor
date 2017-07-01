class CreateWaitlistEmails < ActiveRecord::Migration[5.0]
  def change
    create_table :waitlist_emails do |t|

      t.timestamps
    end
  end
end

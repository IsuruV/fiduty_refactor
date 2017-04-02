# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170324013501) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "advisors", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "type_of_fund"
  end

  create_table "levels", force: :cascade do |t|
    t.integer "level"
    t.string  "name"
  end

  create_table "portfolios", force: :cascade do |t|
    t.string   "fund_type"
    t.float    "open"
    t.float    "day_high"
    t.float    "day_low"
    t.string   "volume"
    t.string   "week_52"
    t.string   "ytd"
    t.string   "avg_1"
    t.string   "avg_3"
    t.string   "avg_5"
    t.string   "market_cap"
    t.string   "p_e"
    t.float    "beta"
    t.text     "description"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "advisor_id"
    t.string   "investment_type"
    t.float    "down_side_risk"
    t.float    "alpha"
    t.float    "meanAnnualReturn"
    t.float    "rSquared"
    t.float    "stdDev"
    t.float    "sharpeRatio"
    t.float    "treynorRatio"
    t.string   "name"
    t.string   "symbol"
    t.float    "ytd_raw"
    t.float    "yield"
    t.float    "price"
    t.string   "simple_description"
    t.string   "fiduty_name"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "portfolio_id"
    t.string   "content"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "rating"
    t.integer  "user_id"
  end

  create_table "sales", force: :cascade do |t|
    t.float    "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "table_skills", force: :cascade do |t|
    t.string "skill_name"
  end

  create_table "tasks", force: :cascade do |t|
    t.integer "level_id"
    t.string  "task"
    t.integer "table_skill_id"
  end

  create_table "user_portfolio_sales", force: :cascade do |t|
    t.integer  "sale_id"
    t.integer  "user_portfolio_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "user_portfolios", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "portfolio_id"
    t.float    "inital_investment"
    t.integer  "shares"
    t.float    "gain_loss"
    t.float    "account_value"
    t.string   "investment_date"
    t.string   "datetime"
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.float    "transaction_fee"
    t.float    "fiduty_fee"
    t.float    "weight"
    t.float    "trad_price"
    t.float    "ytd"
    t.float    "holding_return"
    t.float    "value"
    t.float    "dividends"
    t.boolean  "active",                 default: true
    t.float    "very_inital_investment", default: 0.0
  end

  create_table "user_tasks", force: :cascade do |t|
    t.integer "user_id"
    t.integer "task_id"
    t.boolean "completed", default: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "provider",               default: "email", null: false
    t.string   "uid",                    default: "",      null: false
    t.string   "encrypted_password",     default: "",      null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,       null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "name"
    t.string   "nickname"
    t.string   "image"
    t.string   "email"
    t.text     "tokens"
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
    t.string   "risk_level"
    t.string   "phone"
    t.string   "action"
    t.string   "martial_status"
    t.string   "dependants"
    t.string   "citizenship"
    t.string   "occupation"
    t.string   "dob"
    t.string   "ssn"
    t.string   "address"
    t.float    "total_investments"
    t.string   "fb_id"
    t.integer  "funds",                  default: 1000
    t.integer  "level_id",               default: 1
    t.integer  "points",                 default: 0
    t.boolean  "onboarding",             default: true
    t.integer  "age_range"
    t.string   "gender"
    t.string   "locale"
    t.string   "birthday"
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true, using: :btree
  end

end

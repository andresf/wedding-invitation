require 'sinatra'
require 'csv'

get "/:id" do
  if @name = get_name(params[:id])
    haml :invitation
  else
    [404, "not found"]
  end
end

def get_name(id)
  CSV.foreach("list.csv", headers: true) do |row|
    return row['name'] if row['id'] == id
  end
end

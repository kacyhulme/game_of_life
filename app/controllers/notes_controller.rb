class NotesController < ApplicationController
  respond_to :html, :json

  def index
    @notes = Note.all
    respond_with @notes
  end

  def show
  end

  def create
    @note = Note.create(note_params)
    respond_with @note
  end


  private
  def note_params
    params.require(:note).permit(:title, :description)
  end
end

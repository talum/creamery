module Api
  module V1
    class CommentsController < ApiController
      def create
        @comment = Comment.new(comment_params.merge({commentor_id: current_user.commentor.id}))
        
        if @comment.save
          render json: @comment and return
        else
          render json: { errors: @comment.errors.full_messages }, status: 422
        end
      end

      def update
        # update comment belonging to review
      end

      private

      def comment_params
        params.require(:comment).permit(:content, :review_id)
      end
    end
  end
end

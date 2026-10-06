namespace EnterpriseRetail.Api.SHR_CORE_001;

public class ApiResponse<T>
{
    public bool Success { get; set; }
    public string Message { get; set; } = string.Empty;
    public T? Data { get; set; }
    public List<ApiError> Errors { get; set; } = new();

    public static ApiResponse<T> Ok(T data, string message)
    {
        return new ApiResponse<T>
        {
            Success = true,
            Message = message,
            Data = data
        };
    }

    public static ApiResponse<T> Fail(string message, string code)
    {
        return new ApiResponse<T>
        {
            Success = false,
            Message = message,
            Errors = new List<ApiError>
            {
                new ApiError
                {
                    Code = code,
                    Message = message
                }
            }
        };
    }
}
